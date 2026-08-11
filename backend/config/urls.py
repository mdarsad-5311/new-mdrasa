"""
URL configuration for Madrasa Al-Umaima ERP project.
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse


def api_root(request):
    return JsonResponse({
        "status": "online",
        "service": "Madrasa Al-Umaima ERP Backend API",
        "version": "1.0.0",
        "documentation": "/admin/",
        "endpoints": {
            "auth": "/api/auth/login/",
            "currentUser": "/api/auth/me/",
            "admissions": "/api/admissions/",
            "teachers": "/api/teachers/",
            "students": "/api/students/",
            "courses": "/api/courses/",
            "timetable": "/api/timetable/",
            "attendance": "/api/attendance/",
            "transactions": "/api/transactions/",
            "notices": "/api/notices/",
            "results": "/api/results/",
            "messages": "/api/messages/",
            "complaints": "/api/complaints/",
            "leaveRequests": "/api/leave-requests/",
            "stats": "/api/stats/"
        }
    })


# API URLs
api_patterns = [
    path('', include('apps.accounts.urls')),
    path('', include('apps.admissions.urls')),
    path('', include('apps.academics.urls')),
    path('', include('apps.attendance.urls')),
    path('', include('apps.finance.urls')),
    path('', include('apps.notices.urls')),
    path('', include('apps.results.urls')),
    path('', include('apps.communication.urls')),
    path('', include('apps.dashboard.urls')),
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(api_patterns)),
    path('', api_root, name='api_root'),

    # Direct aliases matching frontend root-relative API calls
    path('', include(api_patterns)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# Custom admin header and branding
admin.site.site_header = "Madrasa Al-Umaima Management ERP"
admin.site.site_title = "Madrasa Al-Umaima Admin Portal"
admin.site.index_title = "Madrasa Administration & Academic Hub"
