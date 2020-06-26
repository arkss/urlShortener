from rest_framework import serializers
from .models import Url


class UrlSerializer(serializers.ModelSerializer):
    shorten = serializers.SerializerMethodField()

    def decimal_to_62(self, n):
        T = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        q, r = divmod(n, 62)
        if q == 0:
            return T[r]
        else:
            return self.decimal_to_62(q) + T[r]

    def get_shorten(self, obj):
        return self.decimal_to_62(obj.id)

    def create(self, validated_data):
        origin_url = validated_data['origin_url']
        url, created = Url.objects.get_or_create(origin_url=origin_url)
        return url

    class Meta:
        model = Url
        fields = ['id', 'shorten', 'origin_url']
