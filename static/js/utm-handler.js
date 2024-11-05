// Default UTM parameters
const DEFAULT_UTM = {
  utm_source: 'docs',
  utm_medium: 'documentation',
  utm_campaign: 'elasticpath_docs'
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
function addUtmToUrl(url) {
  try {
    const urlObj = new URL(url);
    
    // Don't modify external URLs
    if (!urlObj.hostname.includes('elasticpath.dev')) {
      return url;
    }

    // Get stored or default UTM params
    const utmParams = getStoredUtmParams() || DEFAULT_UTM;
    
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
      const modifiedUrl = addUtmToUrl(link.href);
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