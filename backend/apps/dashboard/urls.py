from django.urls import path
from .views import AdminStatsView, StudentDashboardView, ParentDashboardView

urlpatterns = [
    # Top-level statistics
    path('stats/', AdminStatsView.as_view(), name='stats_overview'),
    path('stats/admin/', AdminStatsView.as_view(), name='stats_admin'),
    path('stats/student/', StudentDashboardView.as_view(), name='stats_student'),
    path('stats/parent/', ParentDashboardView.as_view(), name='stats_parent'),

    # Direct portal route aliases for frontend client compatibility
    path('student/dashboard/', StudentDashboardView.as_view(), name='portal_student_dashboard'),
    path('parent/dashboard/', ParentDashboardView.as_view(), name='portal_parent_dashboard'),
]
