using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Stripe;

namespace App.Construction.Controllers
{
    [Route("api/[controller]")]
    public class StripeWebHookController : Controller
    {
        [HttpPost]
        public void Index()
        {
            var json = new StreamReader(HttpContext.Request.Body).ReadToEnd();

            try
            {
                var stripeEvent = EventUtility.ParseEvent(json);

                // Handle the event
                if (stripeEvent.Type == Events.PaymentIntentSucceeded)
                {
                    var paymentIntent = stripeEvent.Data.Object as PaymentIntent;
                    //handlePaymentIntentSucceeded(paymentIntent);
                }
                else if (stripeEvent.Type == Events.PaymentMethodAttached)
                {
                    var paymentMethod = stripeEvent.Data.Object as PaymentMethod;
                    //handlePaymentMethodAttached(paymentMethod);
                }
                // ... handle other event types
                else
                {
                    // Unexpected event type

                }

            }
            catch (StripeException e)
            {
            }
        }

        [HttpGet]
        public async Task<string> Register(string baseUrl)
        {
            var options = new WebhookEndpointCreateOptions
            {
                Url = $"{baseUrl}/api/StripeWebHook",
                EnabledEvents = new List<String> { "charge.failed", "charge.succeeded", "invoice.payment_failed", "invoice.payment_succeeded" }
            };
            var service = new WebhookEndpointService();
            var webhookEndpoint = await service.CreateAsync(options);

            return "Ok";
        }
    }
}