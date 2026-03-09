# Check Details Dialog

The Check Details Dialog is a reusable HTML popup for Oracle Simphony POS JavaScript Extensibility.

## Purpose

Displays active check information from Simphony including:

- Sub Total
- Discount
- Total Due
- Item Name
- Quantity
- Item Total

## Data Source

```javascript
_opsContext.Check.SubTotal
_opsContext.CheckDiscount
_opsContext.CheckTotalDue
_opsContext.CheckDetail.ToArray()
```

## Return Example

```javascript
{
  action: "summary",
  subTotal: 1250.00,
  discount: 100.00,
  totalDue: 1150.00,
  itemCount: 4
}
```

## Usage

Useful for:

- Check review screens
- POS dashboards
- Demonstrations
