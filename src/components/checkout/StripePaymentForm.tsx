"use client";

import { useImperativeHandle, forwardRef } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

export interface StripePaymentFormHandle {
  confirm: () => Promise<{ error?: { message?: string } }>;
}

interface StripePaymentFormProps {
  returnUrl: string;
}

const StripePaymentForm = forwardRef<StripePaymentFormHandle, StripePaymentFormProps>(
  function StripePaymentForm({ returnUrl }, ref) {
    const stripe = useStripe();
    const elements = useElements();

    useImperativeHandle(
      ref,
      () => ({
        confirm: async () => {
          if (!stripe || !elements) return { error: { message: "Stripe not loaded" } };
          const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
              return_url: returnUrl,
            },
          });
          return { error };
        },
      }),
      [stripe, elements, returnUrl]
    );

    return (
      <div className="mt-4">
        <PaymentElement
          options={{
            layout: "tabs",
          }}
        />
      </div>
    );
  }
);

export default StripePaymentForm;
