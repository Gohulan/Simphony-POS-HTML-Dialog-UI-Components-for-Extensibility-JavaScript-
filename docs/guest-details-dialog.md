# Guest Details Dialog

The Guest Details Dialog is a reusable HTML popup for Oracle Simphony POS JavaScript Extensibility.

## Purpose

This dialog captures:

- Guest Name
- Mobile Number

## Features

- POS-friendly HTML dialog
- Input validation
- Custom alert popup
- Touch-friendly UI
- Returns data to Simphony using `SimphonyPOSAPI.closeDialog()`

## Return Example

```javascript
{
  action: "save",
  guestName: "John Smith",
  mobileNumber: "0771234567"
}
```

## Usage

Used in:

- Delivery orders
- Guest capture workflows
- Loyalty registration
