import type { ServicePageCopy } from "../types";
import { copy as backupCopy, href as backupHref } from "./backup-disaster-recovery";
import { copy as businessCopy, href as businessHref } from "./business-continuity";
import { copy as cloudCopy, href as cloudHref } from "./cloud-solutions";
import { copy as consultingCopy, href as consultingHref } from "./consulting-strategy";
import { copy as elevateCopy, href as elevateHref } from "./elevate-in-house-it";
import { copy as futureCopy, href as futureHref } from "./future-proof-infrastructure";
import { copy as managedSupportCopy, href as managedSupportHref } from "./managed-support";
import { copy as securityCopy, href as securityHref } from "./managed-security";

/**
 * Map of service href to page copy. Add new services by creating a file in this
 * folder and registering it here.
 */
const SERVICE_COPY: Record<string, ServicePageCopy> = {
  [managedSupportHref]: managedSupportCopy,
  [cloudHref]: cloudCopy,
  [elevateHref]: elevateCopy,
  [futureHref]: futureCopy,
  [securityHref]: securityCopy,
  [businessHref]: businessCopy,
  [backupHref]: backupCopy,
  [consultingHref]: consultingCopy,
};

/**
 * Returns the page copy for a service by href. Use this in each service page.
 */
export function getServiceCopy(href: string): ServicePageCopy | undefined {
  return SERVICE_COPY[href];
}
