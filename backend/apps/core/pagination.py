from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100

    def paginate_queryset(self, queryset, request, view=None):
        # Allow client to disable pagination by sending ?all=true or ?paginate=false
        if request.query_params.get('all') == 'true' or request.query_params.get('paginate') == 'false':
            return None
        return super().paginate_queryset(queryset, request, view)
