export type RedirectToCheckoutOptions = RedirectToCheckoutClientOptions;

export interface RedirectToCheckoutClientOptions {
  successUrl: string;
  cancelUrl: string;
  lineItems?: Array<{
    price?: string;
    quantity?: number;
  }>;
}

export type CheckoutLocale =
  | "auto"
  | "bg"
  | "cs"
  | "da"
  | "de"
  | "el"
  | "en"
  | "en-GB"
  | "es"
  | "es-419"
  | "et"
  | "fi"
  | "fil"
  | "fr"
  | "fr-CA"
  | "hr"
  | "hu"
  | "id"
  | "it"
  | "ja"
  | "lt"
  | "lv"
  | "ms"
  | "mt"
  | "nb"
  | "nl"
  | "pl"
  | "pt"
  | "pt-BR"
  | "ro"
  | "ru"
  | "sk"
  | "sl"
  | "sv"
  | "th"
  | "tr"
  | "zh"
  | "zh-HK"
  | "zh-TW";
