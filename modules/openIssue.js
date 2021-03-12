export function openIssue() {
    ui.notifications.info("votre navigateur va ouvrir la page des issues sur le dépot gitlab du module");
    var windowObjectReference = window.open("https://gitlab.com/lemaire.erw/srd-heros-et-dragons/-/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=", "_blank");
    
};