from django.contrib import admin
from .models import AcademicResult, SubjectScore


class SubjectScoreInline(admin.TabularInline):
    model = SubjectScore
    extra = 1


@admin.register(AcademicResult)
class AcademicResultAdmin(admin.ModelAdmin):
    list_display = ('student_name', 'roll_no', 'class_name', 'term', 'gpa', 'grade', 'status', 'created_at')
    list_filter = ('class_name', 'status', 'grade', 'term')
    search_fields = ('student_name', 'roll_no', 'class_name')
    inlines = [SubjectScoreInline]


@admin.register(SubjectScore)
class SubjectScoreAdmin(admin.ModelAdmin):
    list_display = ('result', 'subject', 'obtained', 'total', 'grade')
    search_fields = ('result__student_name', 'subject')
