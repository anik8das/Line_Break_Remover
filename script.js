async function copyPageUrl() {
    try {
      yo = window.getSelection().toString();
      await navigator.clipboard.writeText(location.href);
      console.log('Page URL copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }