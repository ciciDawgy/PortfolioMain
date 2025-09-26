function openTab(evt, tabName, direction) {
    // Hide all tab content and reset transitions
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active-tab", "from-left", "from-right");
    }

    // Reset active state of all tabs
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected tab with the scrolling effect
    var selectedTab = document.getElementById(tabName);
    selectedTab.style.display = "block";
    selectedTab.classList.add(direction === 'left' ? 'from-left' : 'from-right');
    
    // Trigger reflow to restart the animation
    void selectedTab.offsetWidth; 

    // After a brief delay, activate the tab and remove the translation
    setTimeout(function() {
        selectedTab.classList.add('active-tab');
    }, 10);

    // Add active class to the clicked tab button
    evt.currentTarget.className += " active";
}

// Optionally, open the first tab by default
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tablinks').click();
});

