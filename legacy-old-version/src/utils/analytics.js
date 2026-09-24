import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase";

export const trackPageView = (pageName) => {
  console.log(`Page viewed: ${pageName}`);
  if (analytics) {
    logEvent(analytics, 'page_view', {
      page_title: pageName,
      page_path: window.location.pathname
    });
  }
};

export const trackSectionView = (sectionName, pageName) => {
  console.log(`Section viewed: ${sectionName} on ${pageName}`);
  if (analytics) {
    logEvent(analytics, 'section_view', {
      section_name: sectionName,
      page_title: pageName
    });
  }
};

export const trackFacilityInteraction = (facilityName, action) => {
  console.log(`Facility interaction: ${action} on ${facilityName}`);
  if (analytics) {
    logEvent(analytics, 'facility_interaction', {
      facility_name: facilityName,
      action_type: action
    });
  }
};

export const trackEvent = (eventName, properties = {}) => {
  console.log(`Event tracked: ${eventName}`, properties);
  if (analytics) {
    logEvent(analytics, eventName, properties);
  }
};
