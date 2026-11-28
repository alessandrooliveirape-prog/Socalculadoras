/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_SUPABASE_ANON_KEY?: string;
  readonly VITE_SITE_ID?: string;
  readonly VITE_AMAZON_ASSOCIATE_TAG?: string;
  readonly VITE_SHOPEE_AFFILIATE_ID?: string;
  readonly VITE_ML_AFFILIATE_TAG?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
