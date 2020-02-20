
from products.api.views import ProductViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ProductViewSet, basename='products')
urlpatterns = router.urls

# from django.urls import path

# from .views import (
#     ProductListView, 
#     ProductDetailView, 
#     ProductCreateView,
#     ProductUpdateView,
#     ProductDeleteView
#     )


# urlpatterns = [
#     path('', ProductListView.as_view()),
#     path('create/', ProductCreateView.as_view()),
#     path('<pk>', ProductDetailView.as_view()),
#     path('<pk>/update/', ProductUpdateView.as_view()),
#     path('<pk>/delete/', ProductDeleteView.as_view())
# ]