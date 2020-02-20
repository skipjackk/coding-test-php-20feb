from rest_framework import viewsets

from products.models import Product
from .serializers import ProductSerializer


class ProductViewSet(viewsets.ModelViewSet):    
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

# from rest_framework.generics import (
#     ListAPIView, 
#     RetrieveAPIView, 
#     CreateAPIView,
#     DestroyAPIView,
#     UpdateAPIView
#     )

# class ProductListView(ListAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer


# class ProductDetailView(RetrieveAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer


# class ProductCreateView(CreateAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer


# class ProductUpdateView(UpdateAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer    


# class ProductDeleteView(DestroyAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer     