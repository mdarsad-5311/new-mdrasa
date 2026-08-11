# Madrasa Al-Umaima ERP Backend Configuration Package
import re
import django.utils.cache

# Compatibility patch for DRF with Django 6.0+ where cc_delim_re was refactored
if not hasattr(django.utils.cache, 'cc_delim_re'):
    django.utils.cache.cc_delim_re = re.compile(r'\s*,\s*')
