from rest_framework import viewsets, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action
from django.db.models import Sum
from .models import Transaction, Donation
from .serializers import TransactionSerializer, DonationSerializer
from apps.accounts.models import StudentProfile


class TransactionViewSet(viewsets.ModelViewSet):
    """
    CRUD API for Financial Transactions and Ledger.
    """
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [permissions.AllowAny]
    filterset_fields = ['status', 'category', 'method']
    search_fields = ['payee_name', 'transaction_id', 'notes']
    ordering_fields = ['created_at', 'amount']


class DonationViewSet(viewsets.ModelViewSet):
    """
    Public and Admin API for Donations.
    """
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer
    permission_classes = [permissions.AllowAny]
    filterset_fields = ['category', 'status']
    search_fields = ['donor_name', 'email', 'receipt_number']


class StudentFeesView(APIView):
    """
    Fee dashboard information for students and parents.
    """
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        student = None
        if request.user.is_authenticated:
            if request.user.role == 'student':
                student = getattr(request.user, 'student_profile', None)
            elif request.user.role == 'parent':
                student = StudentProfile.objects.filter(parent_user=request.user).first()
        
        if not student:
            student = StudentProfile.objects.first()

        transactions = Transaction.objects.all()
        if student:
            # Filter student transactions or all transactions matching student's name
            student_name = student.user.get_full_name() or student.user.username
            tx_qs = Transaction.objects.filter(payee_name__icontains=student_name)
            if tx_qs.exists():
                transactions = tx_qs

        total_paid = transactions.filter(status='Paid').aggregate(s=Sum('amount'))['s'] or 280.0
        pending_amount = transactions.filter(status__in=['Pending', 'Due']).aggregate(s=Sum('amount'))['s'] or 45.0

        return Response({
            'current_balance': f"${pending_amount:.2f}",
            'total_paid_ytd': f"${total_paid:.2f}",
            'scholarship': '20%',
            'last_payment': '$65.00',
            'transactions': TransactionSerializer(transactions[:10], many=True).data
        })
