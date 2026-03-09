var _api = SimphonyExtensibilityAPI;
var Eventing = _api.Eventing;
var OpsContext = _api.Environment.Context;
let _poscore = _api.Common.LoadPosCore();

globalThis.GuestDetails= function () {
    try {
        let htmlContent =
            "<!DOCTYPE html>" +
            "<html>" +
            "<head>" +
            "<meta name='viewport' content='width=device-width, initial-scale=1.0'/>" +
            "<script src='Simphony/POSDialogAPI.js'></script>" +
            "</head>" +
            "<body style='margin:0; padding:0; background:transparent; font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif; display:flex; justify-content:center; align-items:center; height:100vh;'>" +

                "<div style='background:linear-gradient(to right,#e8efe2,#8fbc8f); border-radius:30px; padding:4px; display:inline-block;'>" +

                    "<div style='background:#fffaf2; border-radius:30px; padding:25px; width:800px; box-shadow:0 0 15px rgba(0,0,0,0.15);'>" +

                        "<div style='background:#dfead7; padding:20px; border-radius:12px; display:flex; justify-content:space-between; align-items:center;'>" +
                            "<h1 style='margin:0; font-size:1.4em; color:#2f5d3a;'>Guest Information</h1>" +
                            "<span style='font-size:0.9em; color:#486b50;'>Enter guest details</span>" +
                        "</div>" +

                        "<form id='guestForm' style='margin-top:20px;'>" +

                            "<label style='display:block; margin-top:15px; font-weight:bold; color:#2d3748;'>Guest Name</label>" +
                            "<input type='text' id='guestName' " +
                                   "style='width:100%; box-sizing:border-box; padding:12px; border:1px solid #cfd8cc; border-radius:10px; margin-top:5px; font-size:15px; background:#ffffff; color:#1f2937;' " +
                                   "placeholder='Enter guest name'>" +

                            "<label style='display:block; margin-top:20px; font-weight:bold; color:#2d3748;'>Mobile Number</label>" +
                            "<input type='text' id='mobileNumber' " +
                                   "style='width:100%; box-sizing:border-box; padding:12px; border:1px solid #cfd8cc; border-radius:10px; margin-top:5px; font-size:15px; background:#ffffff; color:#1f2937;' " +
                                   "placeholder='Enter mobile number'>" +

                            "<div style='margin-top:30px; display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px;'>" +

                                "<button type='button' onclick='saveGuest()' " +
                                        "style='flex:1; background:#6aa56a; color:#fff; padding:12px; border:none; border-radius:10px; cursor:pointer; font-weight:600;'>" +
                                    "Save Guest" +
                                "</button>" +

                                "<button type='button' onclick='SimphonyPOSAPI.closeDialog()' " +
                                        "style='flex:1; background:#ffffff; border:1px solid #ccc; padding:12px; border-radius:10px; cursor:pointer; font-weight:600; color:#374151;'>" +
                                    "Cancel" +
                                "</button>" +

                            "</div>" +

                        "</form>" +
                    "</div>" +
                "</div>" +

                "<div id='customAlert' " +
                     "style='display:none; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); " +
                     "background:#fff; border:2px solid #6aa56a; border-radius:15px; padding:30px; width:400px; " +
                     "box-shadow:0 0 20px rgba(0,0,0,0.3); text-align:center; z-index:9999;'>" +

                    "<h2 id='alertTitle' style='color:#2f5d3a; margin-top:0;'></h2>" +
                    "<p id='alertDescription' style='color:#333; font-size:1.1em;'></p>" +
                    "<p id='alertHint' style='color:#777; font-size:0.95em;'></p>" +

                    "<button onclick='hideCustomAlert()' " +
                            "style='margin-top:20px; background:#6aa56a; color:#fff; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; font-weight:600;'>" +
                        "OK" +
                    "</button>" +
                "</div>" +

                "<script>" +

                    "function saveGuest() {" +
                        "var name = document.getElementById('guestName').value.trim();" +
                        "var mobile = document.getElementById('mobileNumber').value.trim();" +

                        "if (!name) {" +
                            "showCustomAlert(" +
                                "'Missing Guest Name'," +
                                "'Guest name is required.'," +
                                "'Please enter the guest name before continuing.'" +
                            ");" +
                            "return;" +
                        "}" +

                        "if (!mobile) {" +
                            "showCustomAlert(" +
                                "'Missing Mobile Number'," +
                                "'Mobile number is required.'," +
                                "'Please enter the guest mobile number before continuing.'" +
                            ");" +
                            "return;" +
                        "}" +

                        "SimphonyPOSAPI.closeDialog(JSON.stringify({" +
                            "action:'save'," +
                            "guestName:name," +
                            "mobileNumber:mobile" +
                        "}));" +
                    "}" +

                    "function showCustomAlert(title, description, hint) {" +
                        "document.getElementById('alertTitle').innerText = title;" +
                        "document.getElementById('alertDescription').innerText = description;" +
                        "document.getElementById('alertHint').innerText = hint;" +
                        "document.getElementById('customAlert').style.display = 'block';" +
                    "}" +

                    "function hideCustomAlert() {" +
                        "document.getElementById('customAlert').style.display = 'none';" +
                    "}" +

                    "document.addEventListener('contextmenu', function(e) {" +
                        "e.preventDefault();" +
                    "});" +

                    "document.addEventListener('keydown', function(e) {" +
                        "var key = (e.key || '').toLowerCase();" +
                        "if ((e.ctrlKey && key === 'u') || " +
                            "(e.ctrlKey && e.shiftKey && key === 'i') || " +
                            "(e.ctrlKey && e.shiftKey && key === 'j') || " +
                            "(e.ctrlKey && key === 'p') || " +
                            "(key === 'f12')) {" +
                            "e.preventDefault();" +
                            "return false;" +
                        "}" +
                    "});" +

                    "document.getElementById('guestForm').addEventListener('submit', function(e) {" +
                        "e.preventDefault();" +
                    "});" +

                    "setTimeout(function() {" +
                        "var guestNameBox = document.getElementById('guestName');" +
                        "if (guestNameBox) guestNameBox.focus();" +
                    "}, 100);" +

                "</script>" +

            "</body>" +
            "</html>";

        let dialogParams = new _poscore.Micros.PosCore.Extensibility.UserInterface.ExtensibilityInPlaceHtmlDialogParameters();

        if (!dialogParams) {
            throw new Error("Failed to create an instance of ExtensibilityHtmlDialogParameters");
        }

        dialogParams.HTML = htmlContent;
        dialogParams.Sender = "GuestDetailsDialog";
        dialogParams.Argument = "argument from ext app: " + new Date().toLocaleTimeString();
        dialogParams.ShowCloseButton = true;
        dialogParams.DebugMode = false;

        globalThis.DialogClosedCallback = function (result) {
            try {
                if (!result) {
                    OpsContext.ShowMessage("Guest detail entry cancelled.");
                    return;
                }

                var data = JSON.parse(result);

                if (data && data.action === "save") {
                    OpsContext.ShowMessage(
                        "Guest Name: " + (data.guestName || "") +
                        "\nMobile: " + (data.mobileNumber || "")
                    );

                    // Use values here as needed
                    // Example:
                    // globalThis.LastGuestName = data.guestName;
                    // globalThis.LastGuestMobile = data.mobileNumber;
                }
            } catch (ex) {
                OpsContext.ShowMessage("Dialog callback error: " + ex.message);
            }
        };

        Eventing.WaitForHtmlDialog(dialogParams, DialogClosedCallback);

    } catch (err) {
        OpsContext.ShowMessage("Error occurred: " + err.message);
    }
};
