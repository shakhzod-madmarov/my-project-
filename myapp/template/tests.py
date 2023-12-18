from django.test import TestCase
from .models import MenuItem, Booking

class MyProjectTests(TestCase):
    def test_menu_item_creation(self):
        menu_item = MenuItem.objects.create(name='Test Item', price=10.99)
        self.assertEqual(menu_item.name, 'Test Item')

    # Add more tests as needed
