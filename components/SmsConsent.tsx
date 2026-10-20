"use client";

import Link from "next/link";

type Props = {
  id: string;
  /** Controlled usage (optional). Uncontrolled forms read name="sms_consent" value="yes". */
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  compact?: boolean;
};

export function SmsConsent({ id, checked, onChange, compact = false }: Props) {
  const controlled = typeof checked === "boolean";
  return (
    <div className="flex items-start gap-3 text-left">
      <input
        type="checkbox"
        id={id}
        name="sms_consent"
        value="yes"
        {...(controlled
          ? { checked, onChange: (e) => onChange?.(e.target.checked) }
          : {})}
        className="mt-1 h-4 w-4 shrink-0 accent-muted-gold"
      />
      <label
        htmlFor={id}
        className={`text-steel-silver/80 leading-relaxed ${compact ? "text-[11px]" : "text-xs"}`}
      >
        By checking the box, you are expressly consenting to receive customer
        care SMS communication from Yonke Law, LLC. Message and data rates may
        apply. Message frequency varies. To opt-out, reply STOP. For help, reply
        HELP. View our{" "}
        <Link href="/privacy-policy" className="text-muted-gold hover:underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms-and-conditions" className="text-muted-gold hover:underline">
          Terms of Service
        </Link>
        .
      </label>
    </div>
  );
}
