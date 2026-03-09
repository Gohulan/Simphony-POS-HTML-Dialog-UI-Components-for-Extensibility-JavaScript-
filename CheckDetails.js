var _api = SimphonyExtensibilityAPI;
var Eventing = _api.Eventing;
var _opsContext = _api.Environment.Context;
var _net = _api.Common.LoadCommonNetAsssembles('System.Core');
let _poscore = _api.Common.LoadPosCore();

globalThis.CheckDetails = function CheckDetails() {
    try {
        var subTotal = _opsContext.Check.SubTotal;
        var discount = _opsContext.CheckDiscount;
        var totalDue = _opsContext.CheckTotalDue;

        var checkDetails = _opsContext.CheckDetail.ToArray();
        var items = [];

        for (var i = 0; i < checkDetails.length; i++) {
            var checkItem = checkDetails[i];

            items.push({
                name: checkItem.Name || "",
                qty: checkItem.SalesCount || 0,
                total: checkItem.Total || 0
            });
        }

        var payload = {
            subTotal: subTotal || 0,
            discount: discount || 0,
            totalDue: totalDue || 0,
            items: items
        };

        var htmlTemplate =
            "<!DOCTYPE html>" +
            "<html>" +
            "<head>" +
            "<meta name='viewport' content='width=device-width, initial-scale=1.0'/>" +
            "<meta charset='UTF-8' />" +
            "<script src='Simphony/POSDialogAPI.js'></script>" +
            "<title>Check Details</title>" +
            "</head>" +
            "<body style='margin:0; padding:0; background:transparent; font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif; display:flex; justify-content:center; align-items:center; height:100vh; overflow:hidden; user-select:none;'>" +

                "<div style='background:linear-gradient(135deg,#dbeafe,#93c5fd); border-radius:30px; padding:4px; display:inline-block; max-width:96vw; box-shadow:0 24px 50px rgba(0,0,0,0.22);'>" +
                    "<div style='background:#ffffff; border-radius:30px; padding:24px; width:980px; max-width:94vw; box-shadow:0 0 15px rgba(0,0,0,0.12);'>" +

                        "<div style='background:linear-gradient(135deg,#eff6ff,#dbeafe); padding:20px; border-radius:14px; display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap; border:1px solid #bfdbfe;'>" +
                            "<div>" +
                                "<h1 style='margin:0; font-size:1.45em; color:#1e3a8a;'>Check Details Summary</h1>" +
                                "<div style='font-size:0.95em; color:#475569; margin-top:4px;'>View subtotal, discount, total due, and item-wise details.</div>" +
                            "</div>" +
                            "<div id='itemCountBadge' style='padding:10px 14px; border-radius:14px; background:#dbeafe; border:1px solid #93c5fd; color:#1d4ed8; font-weight:800; min-width:160px; text-align:center;'>0 items</div>" +
                        "</div>" +

                        "<div style='margin-top:16px; display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:14px;'>" +

                            "<div style='background:#f8fbff; border:1px solid #dbeafe; border-radius:16px; padding:16px; box-shadow:0 8px 16px rgba(0,0,0,0.05);'>" +
                                "<div style='font-size:0.88em; color:#64748b;'>Sub Total</div>" +
                                "<div id='subTotalValue' style='margin-top:6px; font-size:1.35em; font-weight:900; color:#1e3a8a;'>0.00</div>" +
                            "</div>" +

                            "<div style='background:#f8fbff; border:1px solid #dbeafe; border-radius:16px; padding:16px; box-shadow:0 8px 16px rgba(0,0,0,0.05);'>" +
                                "<div style='font-size:0.88em; color:#64748b;'>Discount</div>" +
                                "<div id='discountValue' style='margin-top:6px; font-size:1.35em; font-weight:900; color:#2563eb;'>0.00</div>" +
                            "</div>" +

                            "<div style='background:#eff6ff; border:1px solid #93c5fd; border-radius:16px; padding:16px; box-shadow:0 8px 16px rgba(0,0,0,0.06);'>" +
                                "<div style='font-size:0.88em; color:#64748b;'>Total Due</div>" +
                                "<div id='totalDueValue' style='margin-top:6px; font-size:1.45em; font-weight:900; color:#0f172a;'>0.00</div>" +
                            "</div>" +

                        "</div>" +

                        "<div style='margin-top:18px; display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;'>" +
                            "<div>" +
                                "<div style='font-weight:800; color:#0f172a;'>Check Item Details</div>" +
                                "<div style='font-size:0.92em; color:#6b7280;'>All check lines captured from the active check.</div>" +
                            "</div>" +
                            "<div id='summaryBadge' style='padding:10px 12px; border-radius:14px; background:#eff6ff; border:1px solid #bfdbfe; color:#1d4ed8; font-weight:800; min-width:320px; text-align:center;'>Ready</div>" +
                        "</div>" +

                        "<div id='grid' style='margin-top:16px; max-height:420px; overflow:auto; border-radius:16px; border:1px solid #dbeafe; background:#fafcff;'>" +

                            "<div style='display:grid; grid-template-columns:2.4fr 0.8fr 1fr; gap:0; background:#dbeafe; color:#1e3a8a; font-weight:800; position:sticky; top:0; z-index:2;'>" +
                                "<div style='padding:14px; border-right:1px solid #bfdbfe;'>Item Name</div>" +
                                "<div style='padding:14px; border-right:1px solid #bfdbfe; text-align:center;'>Qty</div>" +
                                "<div style='padding:14px; text-align:right;'>Total</div>" +
                            "</div>" +

                            "<div id='itemRows'></div>" +

                        "</div>" +

                        "<div style='margin-top:20px; display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;'>" +
                            "<button type='button' onclick='closeDialogNow()' style='background:#ffffff; border:1px solid #cbd5e1; padding:12px 22px; border-radius:12px; cursor:pointer; font-weight:700; color:#334155; box-shadow:0 10px 20px rgba(0,0,0,0.08);'>" +
                                "Close" +
                            "</button>" +

                            "<button type='button' onclick='returnSummary()' style='background:linear-gradient(135deg,#2563eb,#1d4ed8); border:none; padding:12px 24px; border-radius:12px; cursor:pointer; font-weight:900; color:#ffffff; box-shadow:0 14px 28px rgba(37,99,235,0.28);'>" +
                                "Return Summary" +
                            "</button>" +
                        "</div>" +

                        "<div style='margin-top:10px; color:#64748b; font-size:0.82em;'>" +
                            "Check information is displayed from the current active Simphony check." +
                        "</div>" +

                    "</div>" +
                "</div>" +

                "<script>" +
                    "var checkData = {{CHECK_DATA_JSON}};" +

                    "function esc(str) {" +
                        "return String(str)" +
                            ".replace(/&/g, '&amp;')" +
                            ".replace(/</g, '&lt;')" +
                            ".replace(/>/g, '&gt;')" +
                            ".replace(/\\\"/g, '&quot;')" +
                            ".replace(/'/g, '&#039;');" +
                    "}" +

                    "function formatNumber(val) {" +
                        "var num = parseFloat(val);" +
                        "if (isNaN(num)) num = 0;" +
                        "return num.toFixed(2);" +
                    "}" +

                    "function renderData() {" +
                        "var items = (checkData && checkData.items) ? checkData.items : [];" +
                        "document.getElementById('subTotalValue').innerText = formatNumber(checkData.subTotal);" +
                        "document.getElementById('discountValue').innerText = formatNumber(checkData.discount);" +
                        "document.getElementById('totalDueValue').innerText = formatNumber(checkData.totalDue);" +
                        "document.getElementById('itemCountBadge').innerText = items.length + ' item' + (items.length === 1 ? '' : 's');" +
                        "document.getElementById('summaryBadge').innerText = 'Sub Total: ' + formatNumber(checkData.subTotal) + ' | Total Due: ' + formatNumber(checkData.totalDue);" +

                        "var rows = document.getElementById('itemRows');" +
                        "rows.innerHTML = '';" +

                        "if (!items || items.length === 0) {" +
                            "rows.innerHTML = '<div style=\"padding:22px; text-align:center; color:#64748b;\">No check item details found.</div>';" +
                            "return;" +
                        "}" +

                        "for (var i = 0; i < items.length; i++) {" +
                            "var item = items[i] || {};" +
                            "var bg = (i % 2 === 0) ? '#ffffff' : '#f8fbff';" +
                            "var row = document.createElement('div');" +
                            "row.style.cssText = 'display:grid; grid-template-columns:2.4fr 0.8fr 1fr; gap:0; background:' + bg + '; border-top:1px solid #e2e8f0;';" +

                            "row.innerHTML =" +
                                "'<div style=\"padding:14px; border-right:1px solid #e2e8f0; color:#0f172a; font-weight:600;\">' + esc(item.name || '') + '</div>' +" +
                                "'<div style=\"padding:14px; border-right:1px solid #e2e8f0; text-align:center; color:#334155; font-weight:700;\">' + esc(item.qty || 0) + '</div>' +" +
                                "'<div style=\"padding:14px; text-align:right; color:#1d4ed8; font-weight:800;\">' + formatNumber(item.total) + '</div>';" +

                            "rows.appendChild(row);" +
                        "}" +
                    "}" +

                    "function closeDialogNow() {" +
                        "SimphonyPOSAPI.closeDialog(JSON.stringify({ action: 'close' }));" +
                    "}" +

                    "function returnSummary() {" +
                        "SimphonyPOSAPI.closeDialog(JSON.stringify({" +
                            "action:'summary'," +
                            "subTotal:checkData.subTotal," +
                            "discount:checkData.discount," +
                            "totalDue:checkData.totalDue," +
                            "itemCount:(checkData.items || []).length" +
                        "}));" +
                    "}" +

                    "document.addEventListener('contextmenu', function(e) { e.preventDefault(); });" +

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

                    "renderData();" +
                "</script>" +

            "</body>" +
            "</html>";

        var htmlContent = htmlTemplate.replace("{{CHECK_DATA_JSON}}", JSON.stringify(payload));

        let dialogParams = new _poscore.Micros.PosCore.Extensibility.UserInterface.ExtensibilityInPlaceHtmlDialogParameters();

        if (!dialogParams) {
            throw new Error("Failed to create an instance of ExtensibilityHtmlDialogParameters");
        }

        dialogParams.HTML = htmlContent;
        dialogParams.Sender = "CheckDetailsDialog";
        dialogParams.Argument = "argument from ext app: " + new Date().toLocaleTimeString();
        dialogParams.ShowCloseButton = true;
        dialogParams.DebugMode = false;

        globalThis.DialogClosedCallback = function (result) {
            try {
                if (!result) {
                    _opsContext.ShowMessage("Check details dialog closed.");
                    return;
                }

                var data = JSON.parse(result);

                if (data && data.action === "summary") {
                    _opsContext.ShowMessage(
                        "Sub Total: " + data.subTotal +
                        "\nDiscount: " + data.discount +
                        "\nTotal Due: " + data.totalDue +
                        "\nItem Count: " + data.itemCount
                    );
                }
            } catch (ex) {
                _opsContext.ShowMessage("Dialog callback error: " + ex.message);
            }
        };

        Eventing.WaitForHtmlDialog(dialogParams, DialogClosedCallback);

    } catch (err) {
        _opsContext.ShowMessage("Error occurred: " + err.message);
    }
};