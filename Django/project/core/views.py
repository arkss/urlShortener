from django.http import HttpResponse, HttpResponseRedirect
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Url
from .serializers import UrlSerializer


class UrlViewSet(viewsets.ModelViewSet):
    queryset = Url.objects.all()
    serializer_class = UrlSerializer


@api_view(['GET'])
def redirect_origin_url(request, shorten):
    id = base62_to_decimal(shorten)
    try:
        url = Url.objects.get(id=id)
    except:
        return Response({
            'resonse': 'error',
            'message': f'{shorten}에 해당하는 url이 존재하지 않습니다.'
        })
    return Response({
        'response': 'success',
        'data': url.origin_url
    })


def base62_to_decimal(inputStr):
    # n진수에서 10진수로 변환
    T = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

    result = 0
    for idx, c in enumerate(reversed(inputStr)):
        num = T.find(c)
        result += num * (62**idx)
    return result


def url_bulk_create(request):
    # for set id to lage number
    urls = []
    for i in range(10000):
        origin_url = f'http://{i}.com'
        urls.append(Url(origin_url=origin_url))
    Url.objects.bulk_create(urls)
    return HttpResponse("success")


def url_truncate(request):
    try:
        Url.objects.all().delete()
    except:
        HttpResponse("hi")

    return HttpResponse("success")
