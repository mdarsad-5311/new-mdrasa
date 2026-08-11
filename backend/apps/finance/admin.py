from django.contrib import admin
from .models import Transaction, Donation


@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ('payee_name', 'amount', 'category', 'method', 'status', 'created_at')
    list_filter = ('status', 'category', 'method')
    search_fields = ('payee_name', 'transaction_id', 'notes')
    ordering = ('-created_at',)


@admin.register(Donation)
class DonationAdmin(admin.ModelAdmin):
    list_display = ('donor_name', 'amount', 'category', 'payment_method', 'status', 'receipt_number', 'created_at')
    list_filter = ('category', 'status', 'is_anonymous')
    search_fields = ('donor_name', 'email', 'phone', 'receipt_number')
