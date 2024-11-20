 
import ReactGA from "react-ga4";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const initGA = (measurementId) => {
  if (measurementId) {
    ReactGA.initialize(measurementId);
  } else {
    console.error('GA Measurement ID is not defined');
  }
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

 
export const useAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);
};

 
export const withAnalytics = (WrappedComponent) => {
  return function WithAnalyticsWrapper(props) {
    useAnalyticsTracker();
    return <WrappedComponent {...props} />;
  };
};


export const trackCustomerInteraction = (action, customerId) => {
  logEvent('Customer', action, customerId);
};

export const trackOrderPlaced = (orderId, amount) => {
  ReactGA.event({
    category: 'Order',
    action: 'Place Order',
    label: orderId,
    value: amount
  });
};

export const trackRevenueMetric = (amount) => {
  ReactGA.event({
    category: 'Metrics',
    action: 'Revenue Update',
    value: amount
  });
};

export const trackMenuInteraction = (itemName, action) => {
  logEvent('Menu', action, itemName);
};
