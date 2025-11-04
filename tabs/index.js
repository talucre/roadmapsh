function openTab(event, tabName) {
  const activeTab = document.querySelector(".tab.active");
  activeTab.classList.remove("active");

  const tab = document.getElementById(tabName);
  tab.classList.add("active");

  const activeBtn = document.querySelector(".tabs-btns button.active");
  activeBtn.classList.remove("active");

  const btn = event.currentTarget;
  btn.classList.add("active");
}
