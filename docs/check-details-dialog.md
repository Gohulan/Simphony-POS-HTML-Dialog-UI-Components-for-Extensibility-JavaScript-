# Simphony POS Check Details HTML Dialog for Extensibility (JavaScript)

A reusable **Check Details HTML dialog component for Oracle Simphony POS JavaScript Extensibility applications**.

This component reads the active check information from Simphony and displays it in a modern **white and light dark blue themed HTML popup**, including:

- Sub Total
- Discount
- Total Due
- Check item details
- Item quantity
- Item totals

It is designed for **Simphony Extensibility HTML dialogs** using `ExtensibilityInPlaceHtmlDialogParameters` and `SimphonyPOSAPI.closeDialog()`.

---

## Overview

This script provides a user-friendly popup dialog for viewing the current active check inside Oracle Simphony POS.

Instead of showing values one by one using message popups, this solution presents the check summary and line-item details in a structured HTML interface that is more suitable for POS operations and demonstrations.

The dialog includes:

- A summary section for financial values
- A scrollable item grid for check lines
- A close action
- A return summary action back to Simphony
- POS-friendly styling for workstation use
- Disabled inspect/right-click shortcuts for cleaner kiosk-style behavior

---

## Function Name

```javascript
globalThis.CheckDetails
```

---

## What It Reads from Simphony

The script retrieves the following information from the active check context:

```javascript
_opsContext.Check.SubTotal
_opsContext.CheckDiscount
_opsContext.CheckTotalDue
_opsContext.CheckDetail.ToArray()
```

It then transforms the item-level details into a JSON payload and renders them inside an HTML dialog.

---

## Features

- Modern HTML popup for active check details
- White and light dark blue POS-friendly theme
- Displays subtotal, discount, and total due
- Displays item name, quantity, and total
- Scrollable item list for large checks
- Clean button actions for closing or returning summary
- Easy to embed into Oracle Simphony POS extensibility projects
- Suitable for demos, cashier workflows, and custom POS UI extensions

---

## Community Contribution Purpose

This script is shared as a **community contribution** for Oracle Simphony developers who want to build modern HTML-based UI components for extensibility applications.

The goal is to create reusable and professional POS dialog templates that can be expanded over time into a broader collection of:

- Check summary dialogs
- Guest detail forms
- Loyalty lookup screens
- Tender selection dialogs
- Registration screens
- Payment flow UI components
- POS dashboards and widgets

---

## Suggested Repository Title

**Simphony POS Check Details HTML Dialog for JavaScript Extensibility**

---

## Suggested Short Repository Description

Reusable Oracle Simphony POS HTML dialog to display active check summary and item details using JavaScript extensibility.

---

## Example Usage

Example function entry point:

```javascript
globalThis.CheckDetails = function CheckDetails() {
    // your Simphony dialog logic here
};
```

Example dialog invocation:

```javascript
Eventing.WaitForHtmlDialog(dialogParams, DialogClosedCallback);
```

Example returned summary payload:

```javascript
{
  action: "summary",
  subTotal: 1250.00,
  discount: 100.00,
  totalDue: 1150.00,
  itemCount: 4
}
```

---

## GitHub README Intro Paragraph

This repository contains a reusable **Check Details HTML dialog for Oracle Simphony POS JavaScript Extensibility**. It reads the active check information directly from Simphony and displays it in a clean, modern popup UI with a white and light blue theme. The component is intended as a practical community resource for developers building better user interfaces inside Simphony POS.

---

## Contributing

Contributions, improvements, and additional Simphony HTML dialog examples are welcome.

The intention is to continuously expand this repository with more reusable UI templates and POS extensibility components for the Simphony developer community.

---

## License

This project is shared as a **community resource**.  
You may use, modify, and extend it in your own Simphony-related projects.
