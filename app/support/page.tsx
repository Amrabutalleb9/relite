"use client";

import { useEffect, useState } from "react";
import {
  SUPPORT_FIELD_KEYS,
  SUPPORT_FIELD_LABELS,
  SUPPORT_PRODUCTS,
  t,
  type SupportLocale,
  type SupportProduct,
  type SupportProductLinks,
} from "@/lib/support-products";

const PRODUCT_STORAGE_KEY = "relite-support-selected-product";
const LOCALE_STORAGE_KEY = "relite-support-locale";
const EMAIL_STORAGE_KEY = "relite-support-email";

const ALLOWED_DOMAIN = "@reliteagency.com";
const FULL_ACCESS_EMAILS = ["amr@reliteagency.com", "andrew@reliteagency.com"];
const AFFILIATE_ACCESS_EMAILS = ["tuqa@reliteagency.com"];

type AccessLevel = "full" | "affiliate" | "basic";

function getAccessLevel(email: string): AccessLevel {
  const normalized = email.trim().toLowerCase();
  if (FULL_ACCESS_EMAILS.includes(normalized)) return "full";
  if (AFFILIATE_ACCESS_EMAILS.includes(normalized)) return "affiliate";
  return "basic";
}

function isAllowedEmail(email: string): boolean {
  const normalized = email.trim().toLowerCase();
  return (
    normalized.endsWith(ALLOWED_DOMAIN) &&
    normalized.indexOf("@") === normalized.length - ALLOWED_DOMAIN.length &&
    normalized.length > ALLOWED_DOMAIN.length
  );
}

function isUrl(value: string): boolean {
  return /^https?:\/\//i.test(value);
}

function getFieldValue(
  product: SupportProduct,
  key: keyof SupportProductLinks | "characterName"
): string {
  if (key === "characterName") return product.characterName;
  return product.links[key];
}

type InfoRow = {
  key: string;
  label: string;
  value: string;
};

function InfoSection({
  title,
  intro,
  rows,
  copiedKey,
  onCopy,
}: {
  title: string;
  intro?: string;
  rows: InfoRow[];
  copiedKey: string | null;
  onCopy: (key: string, value: string) => void;
}) {
  return (
    <section className="border border-border">
      <div className="border-b border-border px-5 py-5">
        <h3 className="font-heading text-subheading tracking-tight">{title}</h3>
        {intro ? <p className="mt-2 text-body text-muted">{intro}</p> : null}
      </div>
      <ul className="divide-y divide-border">
        {rows.map((row) => {
          const empty = !row.value.trim();
          const url = !empty && isUrl(row.value);

          return (
            <li
              key={row.key}
              className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0 flex-1">
                <p className="text-caption uppercase tracking-widest text-muted">
                  {row.label}
                </p>
                {empty ? (
                  <p className="mt-1 text-body text-muted">—</p>
                ) : url ? (
                  <a
                    href={row.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block break-all text-body text-accent-light hover:underline"
                  >
                    {row.value}
                  </a>
                ) : (
                  <p className="mt-1 break-all text-body text-foreground">
                    {row.value}
                  </p>
                )}
              </div>

              <button
                type="button"
                disabled={empty}
                onClick={() => onCopy(row.key, row.value)}
                className="shrink-0 border border-border px-4 py-2 text-caption uppercase tracking-widest text-foreground transition-colors enabled:hover:border-accent enabled:hover:bg-accent enabled:hover:text-background disabled:cursor-not-allowed disabled:opacity-40"
              >
                {copiedKey === row.key ? "Copied" : "Copy"}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default function SupportPage() {
  const [selectedId, setSelectedId] = useState(SUPPORT_PRODUCTS[0]?.id ?? "");
  const [locale, setLocale] = useState<SupportLocale>("en");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [authEmail, setAuthEmail] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    try {
      const storedProduct = localStorage.getItem(PRODUCT_STORAGE_KEY);
      if (storedProduct && SUPPORT_PRODUCTS.some((p) => p.id === storedProduct)) {
        setSelectedId(storedProduct);
      }
      const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (storedLocale === "en" || storedLocale === "ar") {
        setLocale(storedLocale);
      }
      const storedEmail = localStorage.getItem(EMAIL_STORAGE_KEY);
      if (storedEmail && isAllowedEmail(storedEmail)) {
        setAuthEmail(storedEmail.trim().toLowerCase());
      }
    } catch {
      // ignore storage errors
    }
    setHydrated(true);
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const email = emailInput.trim().toLowerCase();
    if (!isAllowedEmail(email)) {
      setLoginError("Access is limited to @reliteagency.com emails.");
      return;
    }
    setLoginError("");
    setAuthEmail(email);
    try {
      localStorage.setItem(EMAIL_STORAGE_KEY, email);
    } catch {
      // ignore storage errors
    }
  }

  function handleSignOut() {
    setAuthEmail(null);
    setEmailInput("");
    try {
      localStorage.removeItem(EMAIL_STORAGE_KEY);
    } catch {
      // ignore storage errors
    }
  }

  useEffect(() => {
    if (!hydrated || !selectedId) return;
    try {
      localStorage.setItem(PRODUCT_STORAGE_KEY, selectedId);
    } catch {
      // ignore storage errors
    }
  }, [hydrated, selectedId]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // ignore storage errors
    }
  }, [hydrated, locale]);

  const product =
    SUPPORT_PRODUCTS.find((p) => p.id === selectedId) ?? SUPPORT_PRODUCTS[0];

  async function copyValue(key: string, value: string) {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      window.setTimeout(() => {
        setCopiedKey((current) => (current === key ? null : current));
      }, 1500);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedKey(key);
      window.setTimeout(() => {
        setCopiedKey((current) => (current === key ? null : current));
      }, 1500);
    }
  }

  if (!product) {
    return <p className="text-muted">No products configured.</p>;
  }

  if (!hydrated) {
    return null;
  }

  if (!authEmail) {
    return (
      <div className="mx-auto max-w-md py-12">
        <h1 className="font-heading text-heading tracking-tight">Sign in</h1>
        <p className="mt-2 text-body text-muted">
          Enter your Relite email to access the support links page.
        </p>
        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          <div>
            <label
              htmlFor="support-email"
              className="mb-2 block text-caption uppercase tracking-widest text-muted"
            >
              Email
            </label>
            <input
              id="support-email"
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="you@reliteagency.com"
              autoComplete="email"
              className="w-full border border-border bg-background px-4 py-3 text-body text-foreground outline-none transition-colors focus:border-accent"
            />
          </div>
          {loginError ? (
            <p className="text-body text-red-600">{loginError}</p>
          ) : null}
          <button
            type="submit"
            className="w-full border border-accent bg-accent px-4 py-3 text-caption uppercase tracking-widest text-background transition-colors hover:bg-accent-light hover:border-accent-light"
          >
            Continue
          </button>
        </form>
      </div>
    );
  }

  const accessLevel = getAccessLevel(authEmail);
  const showAffiliate = accessLevel === "full" || accessLevel === "affiliate";
  const showTechnicalAndVsl = accessLevel === "full";

  const accessRows: InfoRow[] = SUPPORT_FIELD_KEYS.map((key) => ({
    key,
    label: SUPPORT_FIELD_LABELS[key],
    value: getFieldValue(product, key),
  }));

  const affiliateRows: InfoRow[] = [
    {
      key: "affiliate:explodely",
      label: "Explodely account",
      value: product.affiliatePlatform.explodelyAccount,
    },
    {
      key: "affiliate:jvzoo",
      label: "JVZoo account",
      value: product.affiliatePlatform.jvzooAccount,
    },
  ];

  const technicalRows: InfoRow[] = [
    {
      key: "technical:supabase-url",
      label: "Supabase link",
      value: product.technical.supabaseUrl,
    },
    {
      key: "technical:supabase-account",
      label: "Supabase account",
      value: product.technical.supabaseAccount,
    },
    {
      key: "technical:digitalocean",
      label: "DigitalOcean account",
      value: product.technical.digitalOceanAccount,
    },
  ];

  const vslRows: InfoRow[] = [
    {
      key: "vsl:character-name",
      label: "Character name",
      value: product.characterName,
    },
    {
      key: "vsl:everaffiliate",
      label: "EverAffiliate account",
      value: product.vsl.everAffiliateAccount,
    },
    {
      key: "vsl:convertri",
      label: "Convertri account",
      value: product.vsl.convertriAccount,
    },
    {
      key: "vsl:cloudflare",
      label: "Cloudflare account",
      value: product.vsl.cloudflareAccount,
    },
  ];

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
      <div className="min-w-0 flex-1 space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="font-heading text-heading tracking-tight">
              Support Product Links
            </h1>
            <p className="mt-2 text-body text-muted">
              Select a product to view access, training, support links, and
              tracking details. Click Copy to paste into tickets or chat.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
            <div
              className="inline-flex border border-border"
              role="group"
              aria-label="Description language"
            >
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`px-4 py-2 text-caption uppercase tracking-widest transition-colors ${
                  locale === "en"
                    ? "bg-accent text-background"
                    : "bg-background text-foreground hover:bg-accent-subtle"
                }`}
                aria-pressed={locale === "en"}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLocale("ar")}
                className={`border-l border-border px-4 py-2 text-caption uppercase tracking-widest transition-colors ${
                  locale === "ar"
                    ? "bg-accent text-background"
                    : "bg-background text-foreground hover:bg-accent-subtle"
                }`}
                aria-pressed={locale === "ar"}
              >
                العربية
              </button>
            </div>
            <p className="text-caption text-muted">
              {authEmail}{" "}
              <button
                type="button"
                onClick={handleSignOut}
                className="text-accent-light hover:underline"
              >
                Sign out
              </button>
            </p>
          </div>
        </div>

        <section className="border border-border">
          <div className="border-b border-border px-5 py-5">
            <h2 className="font-heading text-subheading tracking-tight">
              {product.name}
            </h2>
            <p
              className="mt-3 text-body leading-relaxed text-muted"
              dir={locale === "ar" ? "rtl" : "ltr"}
              lang={locale}
            >
              {t(product.description, locale)}
            </p>
          </div>

          <ul className="divide-y divide-border">
            {accessRows.map((row) => {
              const empty = !row.value.trim();
              const url = !empty && isUrl(row.value);

              return (
                <li
                  key={row.key}
                  className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-caption uppercase tracking-widest text-muted">
                      {row.label}
                    </p>
                    {empty ? (
                      <p className="mt-1 text-body text-muted">—</p>
                    ) : url ? (
                      <a
                        href={row.value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block break-all text-body text-accent-light hover:underline"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <p className="mt-1 break-all text-body text-foreground">
                        {row.value}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    disabled={empty}
                    onClick={() => copyValue(row.key, row.value)}
                    className="shrink-0 border border-border px-4 py-2 text-caption uppercase tracking-widest text-foreground transition-colors enabled:hover:border-accent enabled:hover:bg-accent enabled:hover:text-background disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {copiedKey === row.key ? "Copied" : "Copy"}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="border border-border">
          <div className="border-b border-border px-5 py-5">
            <h3 className="font-heading text-subheading tracking-tight">
              Premium features
            </h3>
            <p className="mt-2 text-body text-muted">
              In-app premium / power-up pages for {product.name}.
            </p>
          </div>

          {product.premiumFeatures.length === 0 ? (
            <p className="px-5 py-4 text-body text-muted">—</p>
          ) : (
            <ul className="divide-y divide-border">
              {product.premiumFeatures.map((feature) => {
                const copyKey = `premium:${feature.name}`;
                const empty = !feature.url.trim();

                return (
                  <li
                    key={feature.name}
                    className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-start sm:justify-between"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-body font-medium text-foreground">
                        {feature.name}
                      </p>
                      <p
                        className="mt-2 text-body leading-relaxed text-muted"
                        dir={locale === "ar" ? "rtl" : "ltr"}
                        lang={locale}
                      >
                        {t(feature.description, locale)}
                      </p>
                      {empty ? (
                        <p className="mt-2 text-body text-muted">—</p>
                      ) : (
                        <a
                          href={feature.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 block break-all text-body text-accent-light hover:underline"
                        >
                          {feature.url}
                        </a>
                      )}
                    </div>

                    <button
                      type="button"
                      disabled={empty}
                      onClick={() => copyValue(copyKey, feature.url)}
                      className="shrink-0 border border-border px-4 py-2 text-caption uppercase tracking-widest text-foreground transition-colors enabled:hover:border-accent enabled:hover:bg-accent enabled:hover:text-background disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {copiedKey === copyKey ? "Copied" : "Copy"}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        {showAffiliate ? (
          <InfoSection
            title="Affiliate platform"
            intro="Which affiliate account this offer is on."
            rows={affiliateRows}
            copiedKey={copiedKey}
            onCopy={copyValue}
          />
        ) : null}

        {showTechnicalAndVsl ? (
          <>
            <InfoSection
              title="Technical"
              intro="Hosting and database accounts for this product."
              rows={technicalRows}
              copiedKey={copiedKey}
              onCopy={copyValue}
            />

            <InfoSection
              title="VSL"
              intro="Which EverAffiliate and Convertri account this offer / VSL is on."
              rows={vslRows}
              copiedKey={copiedKey}
              onCopy={copyValue}
            />
          </>
        ) : null}
      </div>

      <aside className="w-full shrink-0 lg:sticky lg:top-8 lg:w-64">
        <p className="mb-3 text-caption uppercase tracking-widest text-muted">
          Products
        </p>
        <nav className="border border-border" aria-label="Products">
          <ul className="divide-y divide-border">
            {SUPPORT_PRODUCTS.map((p) => {
              const active = p.id === product.id;
              return (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(p.id)}
                    className={`w-full px-4 py-3 text-left text-body transition-colors ${
                      active
                        ? "bg-accent text-background"
                        : "bg-background text-foreground hover:bg-accent-subtle"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {p.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
