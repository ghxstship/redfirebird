/**
 * GHXSTSHIP service catalog — XPMS v1.0 data layer.
 *
 * Single import surface for the marketing site. The five orthogonal axes
 * plus geography are already cross-referenced via the
 * service.number → axis.activeServices / anchoredServices links; helpers
 * below resolve those references into typed objects.
 */

export * from "./types";
export * from "./classes";
export * from "./phases";
export * from "./tiers";
export * from "./markets";
export * from "./solutions";
export * from "./services";
export * from "./pricing";
export * from "./spotlights";
export * from "./issues";
export * from "./lifecycle";

import { SERVICES, SERVICE_BY_NUMBER, servicesByClass, servicesByPhase } from "./services";
import { CLASSES, CLASS_BY_CODE, CLASS_BY_SLUG } from "./classes";
import { PHASES, PHASE_BY_NUMBER, PHASE_BY_SLUG } from "./phases";
import { TIERS, TIER_BY_NUMBER, TIER_BY_SLUG } from "./tiers";
import { SOLUTIONS, SOLUTION_BY_SLUG } from "./solutions";
import { MARKETS, MARKET_BY_SLUG, ANCHOR_MARKETS } from "./markets";
import type { Service, Solution } from "./types";

/** Resolve a list of catalog numbers into Service objects, drop unknowns. */
export function resolveServices(numbers: number[]): Service[] {
  return numbers.map((n) => SERVICE_BY_NUMBER[n]).filter(Boolean);
}

/** Path helpers — single source of truth for site URLs. Routes live at root. */
export const paths = {
  root: () => "/",
  about: () => "/about",
  contact: () => "/contact",
  pricing: () => "/pricing",

  servicesRoot: () => "/services",
  classDetail: (classSlug: string) => `/services/${classSlug}`,
  serviceDetail: (classSlug: string, serviceSlug: string) => `/services/${classSlug}/${serviceSlug}`,

  solutionsRoot: () => "/solutions",
  solutionDetail: (slug: string) => `/solutions/${slug}`,

  // Variable names retained (`phasesRoot`, `phaseDetail`, `tiersRoot`,
  // `tierDetail`) to keep call sites stable; URL strings updated to the
  // canonical brand labels — Production Lifecycle and Experience Mediums.
  phasesRoot: () => "/production-lifecycle",
  phaseDetail: (slug: string) => `/production-lifecycle/${slug}`,

  tiersRoot: () => "/experience-mediums",
  tierDetail: (slug: string) => `/experience-mediums/${slug}`,

  marketsRoot: () => "/markets",
  marketDetail: (slug: string) => `/markets/${slug}`,

  issuesRoot: () => "/issues",
  issueDetail: (slug: string) => `/issues/${slug}`,

  sagaRoot: () => "/sagas",
  sagaDetail: (slug: string) => `/sagas/${slug}`,

  brand: () => "/brand",
};

export const CATALOG_STATS = {
  serviceCount: SERVICES.length,
  classCount: CLASSES.length,
  phaseCount: PHASES.length,
  tierCount: TIERS.length,
  solutionCount: SOLUTIONS.length,
  marketCount: MARKETS.length,
  anchorMarketCount: ANCHOR_MARKETS.length,
};

export function classSlugForService(service: Service): string {
  return CLASS_BY_CODE[service.primaryClass].slug;
}

export function expandSolution(solution: Solution) {
  return {
    ...solution,
    services: resolveServices(solution.anchoredServices),
  };
}

export {
  SERVICES,
  SERVICE_BY_NUMBER,
  servicesByClass,
  servicesByPhase,
  CLASSES,
  CLASS_BY_CODE,
  CLASS_BY_SLUG,
  PHASES,
  PHASE_BY_NUMBER,
  PHASE_BY_SLUG,
  TIERS,
  TIER_BY_NUMBER,
  TIER_BY_SLUG,
  SOLUTIONS,
  SOLUTION_BY_SLUG,
  MARKETS,
  MARKET_BY_SLUG,
  ANCHOR_MARKETS,
};
