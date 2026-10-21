/**
 * "What happened?" choices, written in plain language for the person filling
 * out the form. These exact strings are sent to Lead Docket as case_type and
 * mapped to Lead Docket's case types there. Change them here only.
 */
export const CASE_TYPES = [
  "Car crash",
  "Truck or 18-wheeler crash",
  "Motorcycle crash",
  "Hit while walking or biking",
  "Hurt by a medical mistake",
  "Lost a loved one",
  "Nursing home neglect or abuse",
  "Hurt at work",
  "Fell or got hurt on someone's property",
  "Hurt by a product",
  "Something else or not sure",
] as const;
