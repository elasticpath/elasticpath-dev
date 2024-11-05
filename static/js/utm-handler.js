// Default UTM parameters
const DEFAULT_UTM = {
  utm_source: 'elastic-path-dev',
  utm_medium: 'dev-site',
  utm_campaign: 'fy25q1-dev'
};

// Campaign mapping for different buttons
const CAMPAIGN_MAPPING = {
  'support': 'fy25q1-dev-support',
  'freetrial': 'fy25q1-dev-free-trial',
  'docs': 'fy25q1-dev-documentation',
  'get-in-touch': 'fy25q1-dev-get-in-touch',
  'guides': 'fy25q1-dev-guides',
  'videos': 'fy25q1-dev-videos',
  'api': 'fy25q1-dev-api',
  'sample-apps': 'fy25q1-dev-sample-apps',
  'changelog': 'fy25q1-dev-changelog',
  'commerce-manager': 'fy25q1-dev-commerce-manager',
  'pxm': 'fy25q1-dev-pxm',
  'subscriptions': 'fy25q1-dev-subscriptions',
  'carts': 'fy25q1-dev-carts',
  'studio': 'fy25q1-dev-studio',
  'composer': 'fy25q1-dev-composer',
  'payments': 'fy25q1-dev-payments',
  'developer-tools': 'fy25q1-dev-developer-tools',
  'self-managed': 'fy25q1-dev-self-managed',
  // Add more campaign mappings as needed
};

// Get UTM params from URL if they exist
function getUrlUtmParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = {};
  
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
    if (urlParams.has(param)) {
      utmParams[param] = urlParams.get(param);
    }
  });
  
  return utmParams;
}

// Store UTM params in sessionStorage
function storeUtmParams(params) {
  sessionStorage.setItem('utmParams', JSON.stringify(params));
}

// Get stored UTM params
function getStoredUtmParams() {
  const stored = sessionStorage.getItem('utmParams');
  return stored ? JSON.parse(stored) : null;
}

// Add UTM params to a URL
function addUtmToUrl(url, campaignType) {
  try {
    const urlObj = new URL(url);
    
    // Don't modify external URLs
    if (!urlObj.hostname.includes('elasticpath.dev')) {
      return url;
    }

    // Get stored or default UTM params
    const utmParams = getStoredUtmParams() || {...DEFAULT_UTM};
    
    // Override campaign if specified
    if (campaignType && CAMPAIGN_MAPPING[campaignType]) {
      utmParams.utm_campaign = CAMPAIGN_MAPPING[campaignType];
    }
    
    // Add UTM params to URL
    Object.entries(utmParams).forEach(([key, value]) => {
      urlObj.searchParams.set(key, value);
    });

    return urlObj.toString();
  } catch (e) {
    // Return original URL if invalid
    return url;
  }
}

// Initialize UTM handling
function initUtmHandler() {
  // Store UTM params from URL if present
  const urlUtmParams = getUrlUtmParams();
  if (Object.keys(urlUtmParams).length > 0) {
    storeUtmParams(urlUtmParams);
  }

  // Add click event listener to handle links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.href) {
      // Get the campaign type from the data attribute
      const campaignType = link.getAttribute('datautmcampaign');
      const modifiedUrl = addUtmToUrl(link.href, campaignType);
      if (modifiedUrl !== link.href) {
        e.preventDefault();
        window.location.href = modifiedUrl;
      }
    }
  });
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initUtmHandler);
} else {
  initUtmHandler();
} 