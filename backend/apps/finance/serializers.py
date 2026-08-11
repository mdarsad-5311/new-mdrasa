from rest_framework import serializers
from .models import Transaction, Donation


class TransactionSerializer(serializers.ModelSerializer):
    _id = serializers.CharField(source='id', read_only=True)
    payeeName = serializers.CharField(source='payee_name', required=False)
    createdAt = serializers.DateTimeField(source='created_at', read_only=True)
    amount = serializers.FloatField()

    class Meta:
        model = Transaction
        fields = [
            '_id', 'id',
            'payee_name', 'payeeName',
            'student', 'amount', 'category', 'method',
            'status', 'transaction_id', 'receipt_file', 'notes',
            'createdAt', 'created_at', 'updated_at'
        ]

    def to_internal_value(self, data):
        mutable_data = data.copy() if hasattr(data, 'copy') else dict(data)
        if 'payeeName' in mutable_data and 'payee_name' not in mutable_data:
            mutable_data['payee_name'] = mutable_data['payeeName']
        return super().to_internal_value(mutable_data)


class DonationSerializer(serializers.ModelSerializer):
    _id = serializers.CharField(source='id', read_only=True)
    createdAt = serializers.DateTimeField(source='created_at', read_only=True)

    class Meta:
        model = Donation
        fields = [
            '_id', 'id', 'donor_name', 'email', 'phone',
            'amount', 'category', 'payment_method', 'status',
            'is_anonymous', 'receipt_number', 'message',
            'createdAt', 'created_at'
        ]
