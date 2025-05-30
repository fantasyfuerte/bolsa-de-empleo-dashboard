import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

const plans = [
  {
    id: 1,
    name: "Básico",
    price: 100,
    currency: "CUP",
    features: ["Servicios durante 30 días"],
  },
  {
    id: 2,
    name: "Cuota VIP",
    price: 500,
    currency: "CUP",
    features: ["Servicios durante 90 días"],
  },
];

function SubscriptionsUserPage() {
  return (
    <section>
      <article className="flex md:items-center md:justify-between flex-col md:flex-row gap-2">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Tus Suscripciones
          </h1>
          <p className="text-muted-foreground">
            Adquiere planes de suscripción para recibir funcionalidades
            exclusivas
          </p>
        </div>
        <Link href={"/subscriptions/history"} className="">
          <Button variant="secondary"className="text-primary">
            <Clock className="mr-2 h-4 w-4" />
            Ver Historial
          </Button>
        </Link>
      </article>
      <article className="grid md:grid-cols-3 gap-2 pt-5">
        {plans.map((plan) => (
          <Link key={plan.id} href={`/subscriptions/${plan.id}`}>
            <Card className="border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-xl font-medium text-gray-600">
                    {plan.currency}
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-primary mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-2 text-gray-600">{feature}</p>
                    </div>
                  ))}
                </div>
                <Button className="mt-2">Comprar Plan</Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </article>
    </section>
  );
}

export default SubscriptionsUserPage;
