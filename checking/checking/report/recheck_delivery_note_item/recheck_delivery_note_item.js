// Copyright (c) 2016, molie and contributors
// For license information, please see license.txt

frappe.query_reports["Recheck Delivery Note Item"] = {
	"filters": [
		{
			"fieldname": "delivery_note",
			"label": __("Delivery Note"),
			"fieldtype": "Link",
			"options": "Delivery Note"
		},
		{
			"fieldname":"from_date",
			"label": __("From Date"),
			"fieldtype": "Date",
			"width": "80",
			"default": frappe.datetime.month_start()
		},
		{
			"fieldname":"to_date",
			"label": __("To Date"),
			"fieldtype": "Date",
			"width": "80",
			"default": frappe.datetime.month_end()
		},
		{
			"fieldname": "warehouse",
			"label": __("Warehouse"),
			"fieldtype": "Link",
			"options": "Warehouse"
		},
		{
			"fieldname": "item_group",
			"label": __("Item Group"),
			"fieldtype": "Link",
			"options": "Item Group"
		},
		{
			"fieldname": "cost_center",
			"label": __("Cost Center"),
			"fieldtype": "Link",
			"options": "Cost Center"
		},
		{
			"fieldname":"entry_type",
			"label": __("Status"),
			"fieldtype": "Select",
			"options": " \nDraft\nTo Bill\nCompleted\nReturn",
			"default": "Draft"
		}
	]
}
