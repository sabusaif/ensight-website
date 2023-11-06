from django.urls import path, include
from knox import views as knox_views
from . import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.index, name='index'),
    path('search/', views.search, name='search'),
    path('', include('knox.urls')),
    path('account/register', views.RegisterAPI.as_view()),
    path('account/current_user', views.CurrentUserAPI.as_view()),
    path('account/login', views.LoginAPI.as_view()),
    path('account/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
