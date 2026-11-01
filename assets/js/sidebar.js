// Load the handbook tree once per browser cache, then activate this page's path.
(() => {
  const navigation = document.getElementById('td-section-nav');
  if (!navigation || !navigation.dataset.sidebarTree) return;

  function activateCurrentPage() {
    const current = document.getElementById(navigation.dataset.sidebarCurrent);
    if (!current || !navigation.contains(current)) return;

    current.classList.add('active');
    current.setAttribute('aria-current', 'page');
    current.querySelector('span')?.classList.add('td-sidebar-nav-active-item');

    const item = current.closest('li');
    for (
      let ancestor = item;
      ancestor && navigation.contains(ancestor);
      ancestor = ancestor.parentElement?.closest('li')
    ) {
      ancestor.classList.add('active-path', 'show');
      for (const child of ancestor.children) {
        if (child.matches('input[type="checkbox"]')) child.checked = true;
      }
    }

    for (const sibling of item?.parentElement?.children || []) {
      if (sibling.matches('li')) sibling.classList.add('show');
    }
    for (const child of item?.querySelectorAll(':scope > ul > li') || []) {
      child.classList.add('show');
    }
  }

  activateCurrentPage();
  fetch(navigation.dataset.sidebarTree)
    .then(response => {
      if (!response.ok) throw new Error(`Sidebar HTTP ${response.status}`);
      return response.json();
    })
    .then(data => {
      if (typeof data.html !== 'string') throw new Error('Invalid sidebar data');
      // Only replace the tree: keep language controls and Bootstrap's mobile
      // collapse element in place, including a menu opened during the request.
      const tree = navigation.querySelector('.td-sidebar-nav__section.ul-0');
      if (!tree) return;
      const template = document.createElement('template');
      template.innerHTML = data.html;
      tree.replaceWith(template.content);
      activateCurrentPage();
    })
    .catch(error => {
      // The server-rendered top-level links remain available on failure.
      console.warn('Sidebar navigation could not be loaded.', error);
    });
})();
