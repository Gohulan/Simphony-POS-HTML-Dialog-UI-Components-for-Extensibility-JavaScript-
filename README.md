# Simphony POS HTML Dialog UI Components for Extensibility (JavaScript)

Reusable **HTML dialog UI components for Oracle Simphony POS JavaScript Extensibility applications**, including guest capture forms, lookup dialogs, check summary screens, and modern POS-friendly interfaces.

---

## Overview

This repository provides a collection of reusable **HTML dialog interfaces and UI components designed for Oracle Simphony POS JavaScript Extensibility applications**.

The goal of this project is to help Simphony developers quickly build **modern, touch-friendly user interfaces** for POS operations without needing to design dialogs from scratch.

The dialogs are designed to work with the **Simphony Extensibility HTML Dialog API (`SimphonyPOSAPI`)** and follow a POS-optimized layout suitable for workstation terminals.

---

## Features

The repository currently includes examples such as:

- Guest information capture dialogs
- Input forms with validation
- Custom alert dialogs
- POS-friendly buttons and layouts
- Secure dialogs with disabled inspect shortcuts
- Mobile and touch-friendly input controls
- Check detail summary dialogs
- Reusable popup UI patterns for Simphony extensibility

Each component can be easily embedded into a Simphony extensibility application using:

```
ExtensibilityInPlaceHtmlDialogParameters
```

and returned back to the POS application using:

```
SimphonyPOSAPI.closeDialog()
```

---

## Repository Structure

### Available Components

- [Guest Details Dialog](docs/guest-details-dialog.md)  
- [Check Details Dialog](docs/check-details-dialog.md)  

---

## Purpose of the Project

This project is created as a **community contribution** to simplify UI development for Simphony extensibility applications.

It aims to provide **ready-to-use templates** that developers can quickly integrate into their POS solutions.

---

## Planned Additions

Over time this repository will expand with additional components such as:

- Loyalty lookup dialogs
- Payment selection interfaces
- Membership registration forms
- POS dashboards and widgets
- Touch-optimized POS controls

---

## Contributing

Contributions and improvements are welcome from the **Simphony developer community**.

---

## License

This project is provided as a **community resource for Simphony developers**.
