from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'url', views.UrlViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('url_bulk_create/', views.url_bulk_create),
    path('url_truncate/', views.url_truncate),
    path('<str:shorten>/', views.redirect_origin_url),
]
