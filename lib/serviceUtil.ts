import { ServiceData } from "@/constants/serviceData";
import type { Service } from "@/constants/serviceData";

export function getServiceById(
  id: string,
  locale: string
): Service | undefined {
  const services = ServiceData[locale] || ServiceData["en"];
  return services.find((service) => service.id === id);
}
export function getAllServices(): Service[] {
  const servicesMap = new Map<string, Service>();

  Object.keys(ServiceData).forEach((locale) => {
    ServiceData[locale].forEach((service) => {
      if (!servicesMap.has(service.id)) {
        servicesMap.set(service.id, service);
      }
    });
  });

  return Array.from(servicesMap.values());
}
