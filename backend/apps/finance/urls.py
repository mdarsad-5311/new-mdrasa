from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TransactionViewSet, DonationViewSet, StudentFeesView

router = DefaultRouter()
router.register(r'transactions', TransactionViewSet, basename='transaction')
router.register(r'accounts', TransactionViewSet, basename='account-transaction')
router.register(r'donations', DonationViewSet, basename='donation')

urlpatterns = [
    path('fees/my-fees/', StudentFeesView.as_view(), name='my_fees'),
    path('', include(router.urls)),
]
