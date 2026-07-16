"use client";

import { useEffect, useState } from "react";
import {
  SUPPORT_FIELD_KEYS,
  SUPPORT_PRODUCTS,
  SUPPORT_UI,
  t,
  type SupportLocale,
  type SupportProduct,
  type SupportProductLinks,
} from "@/lib/support-products";

const PRODUCT_STORAGE_KEY = "relite-support-selected-product";
const LOCALE_STORAGE_KEY = "relite-support-locale";

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

export default function SupportPage() {
  const [selectedId, setSelectedId] = useState(SUPPORT_PRODUCTS[0]?.id ?? "");
  const [locale, setLocale] = useState<SupportLocale>("en");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

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
    } catch {
      // ignore storage errors
    }
    setHydrated(true);
  }, []);

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
  const isRtl = locale === "ar";

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

  return (
    <div
      className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10"
      dir={isRtl ? "rtl" : "ltr"}
      lang={locale}
    >
      <div className="min-w-0 flex-1 space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="font-heading text-heading tracking-tight">
              {t(SUPPORT_UI.pageTitle, locale)}
            </h1>
            <p className="mt-2 text-body text-muted">
              {t(SUPPORT_UI.pageIntro, locale)}
            </p>
          </div>

          <div
            className="inline-flex shrink-0 border border-border self-start"
            role="group"
            aria-label="Language"
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
              className={`border-s border-border px-4 py-2 text-caption uppercase tracking-widest transition-colors ${
                locale === "ar"
                  ? "bg-accent text-background"
                  : "bg-background text-foreground hover:bg-accent-subtle"
              }`}
              aria-pressed={locale === "ar"}
            >
              العربية
            </button>
          </div>
        </div>

        <section className="border border-border">
          <div className="border-b border-border px-5 py-5">
            <h2 className="font-heading text-subheading tracking-tight">
              {product.name}
            </h2>
            <p className="mt-3 text-body leading-relaxed text-muted">
              {t(product.description, locale)}
            </p>
          </div>

          <ul className="divide-y divide-border">
            {SUPPORT_FIELD_KEYS.map((key) => {
              const value = getFieldValue(product, key);
              const empty = !value.trim();
              const url = !empty && isUrl(value);
              const label = t(SUPPORT_UI.fields[key], locale);

              return (
                <li
                  key={key}
                  className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-caption uppercase tracking-widest text-muted">
                      {label}
                    </p>
                    {empty ? (
                      <p className="mt-1 text-body text-muted">—</p>
                    ) : url ? (
                      <a
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block break-all text-body text-accent-light hover:underline"
                        dir="ltr"
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        className="mt-1 break-all text-body text-foreground"
                        dir="ltr"
                      >
                        {value}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    disabled={empty}
                    onClick={() => copyValue(key, value)}
                    className="shrink-0 border border-border px-4 py-2 text-caption uppercase tracking-widest text-foreground transition-colors enabled:hover:border-accent enabled:hover:bg-accent enabled:hover:text-background disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {copiedKey === key
                      ? t(SUPPORT_UI.copied, locale)
                      : t(SUPPORT_UI.copy, locale)}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="border border-border">
          <div className="border-b border-border px-5 py-5">
            <h3 className="font-heading text-subheading tracking-tight">
              {t(SUPPORT_UI.premiumFeatures, locale)}
            </h3>
            <p className="mt-2 text-body text-muted">
              {t(SUPPORT_UI.premiumIntro, locale)} {product.name}.
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
                      <p className="mt-2 text-body leading-relaxed text-muted">
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
                          dir="ltr"
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
                      {copiedKey === copyKey
                        ? t(SUPPORT_UI.copied, locale)
                        : t(SUPPORT_UI.copy, locale)}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>

      <aside className="w-full shrink-0 lg:sticky lg:top-8 lg:w-64">
        <p className="mb-3 text-caption uppercase tracking-widest text-muted">
          {t(SUPPORT_UI.products, locale)}
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
                    className={`w-full px-4 py-3 text-start text-body transition-colors ${
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
