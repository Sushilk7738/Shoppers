from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
import razorpay
import os

client = razorpay.Client(auth=(
    os.getenv("RAZORPAY_KEY_ID"),
    os.getenv("RAZORPAY_KEY_SECRET")
))


@api_view(["POST"])
@permission_classes([IsAuthenticated])   # 🔥 REQUIRED
def create_order(request):
    try:
        amount = request.data.get("amount")

        if not amount:
            return Response({"detail": "Amount required"}, status=400)

        # Convert to paisa
        amount_in_paisa = int(amount) * 100   # 🔥 Correct Razorpay conversion

        # Create Razorpay Order
        order = client.order.create({
            "amount": amount_in_paisa,
            "currency": "INR",
            "payment_capture": 1,
        })

        return Response(order, status=200)

    except Exception as e:
        print("RAZORPAY ERROR:", e)
        return Response({"detail": str(e)}, status=500)
