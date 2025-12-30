#!/bin/bash

# IndexNow Submission Script
# Simple and fast - no dependencies required!

echo "🚀 Submitting URLs to IndexNow (Bing, Yandex, etc.)..."
echo ""

# Generate a random API key
API_KEY=$(openssl rand -hex 16)

echo "🔑 Generated API Key: $API_KEY"
echo "⚠️  SAVE THIS KEY! You'll need it to verify domain ownership."
echo ""

# Create JSON payload
cat > /tmp/indexnow-payload.json << EOF
{
  "host": "gosnellsfamilypractice.com.au",
  "key": "$API_KEY",
  "keyLocation": "https://gosnellsfamilypractice.com.au/$API_KEY.txt",
  "urlList": [
    "https://gosnellsfamilypractice.com.au",
    "https://gosnellsfamilypractice.com.au/about",
    "https://gosnellsfamilypractice.com.au/after-hours",
    "https://gosnellsfamilypractice.com.au/blog",
    "https://gosnellsfamilypractice.com.au/blog/importance-of-regular-checkups",
    "https://gosnellsfamilypractice.com.au/blog/managing-chronic-conditions",
    "https://gosnellsfamilypractice.com.au/blog/nutrition-tips-from-dietitians",
    "https://gosnellsfamilypractice.com.au/blog/preparing-for-flu-season-2025",
    "https://gosnellsfamilypractice.com.au/blog/skin-cancer-screening",
    "https://gosnellsfamilypractice.com.au/blog/understanding-telehealth",
    "https://gosnellsfamilypractice.com.au/faqs",
    "https://gosnellsfamilypractice.com.au/services",
    "https://gosnellsfamilypractice.com.au/services/chronic-disease-management",
    "https://gosnellsfamilypractice.com.au/services/diabetes-management",
    "https://gosnellsfamilypractice.com.au/services/dietitian-services",
    "https://gosnellsfamilypractice.com.au/services/driver-medicals",
    "https://gosnellsfamilypractice.com.au/services/general-checkups",
    "https://gosnellsfamilypractice.com.au/services/immunisations",
    "https://gosnellsfamilypractice.com.au/services/mens-health",
    "https://gosnellsfamilypractice.com.au/services/mental-health",
    "https://gosnellsfamilypractice.com.au/services/minor-procedures",
    "https://gosnellsfamilypractice.com.au/services/pathology-services",
    "https://gosnellsfamilypractice.com.au/services/pre-employment-medicals",
    "https://gosnellsfamilypractice.com.au/services/pregnancy-care",
    "https://gosnellsfamilypractice.com.au/services/psychology-services",
    "https://gosnellsfamilypractice.com.au/services/respiratory-care",
    "https://gosnellsfamilypractice.com.au/services/skin-cancer-screening",
    "https://gosnellsfamilypractice.com.au/services/telehealth",
    "https://gosnellsfamilypractice.com.au/services/travel-health",
    "https://gosnellsfamilypractice.com.au/services/womens-health",
    "https://gosnellsfamilypractice.com.au/services/workers-compensation",
    "https://gosnellsfamilypractice.com.au/team"
  ]
}
EOF

echo "📤 Submitting 31 URLs to IndexNow API..."
echo ""

# Submit to IndexNow
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST https://api.indexnow.org/indexnow \
  -H "Content-Type: application/json; charset=utf-8" \
  -d @/tmp/indexnow-payload.json)

HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | head -n-1)

echo "======================================================================"
echo "📊 SUBMISSION RESULT"
echo "======================================================================"
echo "HTTP Status: $HTTP_CODE"

if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "202" ]; then
    echo "✅ SUCCESS! URLs submitted to IndexNow"
    echo ""
    echo "📝 NEXT STEP - Verify Domain Ownership:"
    echo "   Create this file on your website:"
    echo "   https://gosnellsfamilypractice.com.au/$API_KEY.txt"
    echo ""
    echo "   File content (just one line):"
    echo "   $API_KEY"
    echo ""
    echo "   I'll create this file for you now..."

    # Create the API key file
    echo "$API_KEY" > "../public/$API_KEY.txt"

    if [ -f "../public/$API_KEY.txt" ]; then
        echo "   ✅ File created at: public/$API_KEY.txt"
        echo "   📤 Deploy your site to activate IndexNow!"
    else
        echo "   ⚠️  Couldn't auto-create file. Please create it manually."
    fi

    echo ""
    echo "✨ Search engines notified!"
    echo "   Supported: Bing, Yandex, Seznam.cz, Naver"
    echo "   They will crawl your URLs within minutes to hours."
else
    echo "⚠️  Unexpected response: $HTTP_CODE"
    echo "$BODY"
fi

echo "======================================================================"
echo ""

# Cleanup
rm -f /tmp/indexnow-payload.json
