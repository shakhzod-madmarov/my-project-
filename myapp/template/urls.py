from django.urls import path
from .views import index

urlpatterns = [
    path('', index, name='index'),
    # Add other paths as needed
]

from django.urls import path
from .views import MenuItemList, BookingList

urlpatterns = [
    path('api/menu/', MenuItemList.as_view(), name='menu-list'),
    path('api/bookings/', BookingList.as_view(), name='booking-list'),
    # Add other API paths as needed
]
