
$(function(){
  chrome.tabs.getSelected(null, function(tab) {
      $('#currentLink').val(tab.url);
      $.post("https://koombea.slack.com/services/hooks/slackbot?token=AJotc1Zs68B80k389GPyddZS&channel=%23convergely-test", tab.url)
  });
});
