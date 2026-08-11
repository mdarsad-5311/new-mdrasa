from django.contrib import admin
from .models import Notice


@admin.register(Notice)
class NoticeAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'audience', 'status', 'is_pinned', 'created_at')
    list_filter = ('category', 'audience', 'status', 'is_pinned')
    search_fields = ('title', 'description')
    ordering = ('-is_pinned', '-created_at')
