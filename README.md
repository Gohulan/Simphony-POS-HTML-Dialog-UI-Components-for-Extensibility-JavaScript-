# Simphony POS HTML Dialog UI Components for Extensibility (JavaScript)

Reusable **HTML dialog UI components for Oracle Simphony POS JavaScript
Extensibility applications**, including guest capture forms, lookup
dialogs, and modern POS-friendly interfaces.

------------------------------------------------------------------------

## Overview

This repository provides a collection of reusable **HTML dialog
interfaces and UI components designed for Oracle Simphony POS JavaScript
Extensibility applications**.

The goal of this project is to help Simphony developers quickly build
**modern, touch-friendly user interfaces** for POS operations without
needing to design dialogs from scratch.

The dialogs are designed to work with the **Simphony Extensibility HTML
Dialog API (`SimphonyPOSAPI`)** and follow a POS-optimized layout
suitable for workstation terminals.

------------------------------------------------------------------------

## Features

The repository currently includes examples such as:

-   Guest information capture dialogs\
-   Input forms with validation\
-   Custom alert dialogs\
-   POS-friendly buttons and layout\
-   Secure dialogs with disabled inspect shortcuts\
-   Mobile and touch friendly input controls

Each component can be easily embedded into a Simphony extensibility
application using:

    ExtensibilityInPlaceHtmlDialogParameters

and returned back to the POS application using:

    SimphonyPOSAPI.closeDialog()

------------------------------------------------------------------------

## Purpose of the Project

This project is created as a **community contribution** to simplify UI
development for Simphony extensibility applications.

It aims to provide **ready-to-use templates** that developers can
quickly integrate into their POS solutions.

------------------------------------------------------------------------

## Planned Additions

Over time this repository will expand with additional components such
as:

-   Loyalty lookup dialogs\
-   Payment selection interfaces\
-   Membership registration forms\
-   POS dashboards and widgets\
-   Touch-optimized POS controls\
-   Reusable validation and alert components

------------------------------------------------------------------------

## Example Usage

Example dialog invocation inside a Simphony JavaScript extensibility
application:

``` javascript
Eventing.WaitForHtmlDialog(dialogParams, DialogClosedCallback);
```

Returning values from the HTML dialog:

``` javascript
SimphonyPOSAPI.closeDialog(JSON.stringify({
  guestName: "John Smith",
  mobileNumber: "0771234567"
}));
```

------------------------------------------------------------------------

## Contributing

Contributions and improvements are welcome from the **Simphony developer
community**.

The intention is to build a **shared library of practical UI templates**
that can accelerate development of POS integrations and extensions.

------------------------------------------------------------------------

## License

This project is provided as a **community resource for Simphony
developers**.\
Feel free to use, modify, and extend it in your own projects.
