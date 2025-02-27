bobaCatsOrder = [
    "MMP", "3JT", "SMM", "HH", "CBC", "MM", "BSR", "OC", "PMK", "TSH"
]

paths = []

def simulate_quiz(path=None, scores=None, question=1):
    if path is None:
        path = []
    if scores is None:
        scores = {cat: 0 for cat in bobaCatsOrder}  # Initialize scores properly

    # End of quiz
    if question > 8:
        paths.append({"scores": scores.copy()})
        return

    choices = quiz_choices.get(question)
    if not choices:
        return

    for choice in choices:
        new_scores = scores.copy()
        for score in choice["scores"]:
            cat = score["cat"]
            points = score["points"]
            new_scores[cat] += points  # Update the score
        simulate_quiz(path + [choice["text"]], new_scores, question + 1)

quiz_choices = {
    1: [
        {"text": "Counter", "scores": [{"cat": "SMM", "points": 3}, {"cat": "HH", "points": 2}, {"cat": "BSR", "points": 1}]},
        {"text": "Kiosk", "scores": [{"cat": "TSH", "points": 3}, {"cat": "PMK", "points": 2}, {"cat": "MM", "points": 1}]}
    ],
    2: [
        {"text": "Help with napkins", "scores": [{"cat": "HH", "points": 3}, {"cat": "BSR", "points": 2}, {"cat": "SMM", "points": 1}]},
        {"text": "Gasp! A tragedy", "scores": [{"cat": "MMP", "points": 3}, {"cat": "3JT", "points": 2}, {"cat": "OC", "points": 1}]},
        {"text": "Step away slowly", "scores": [{"cat": "PMK", "points": 3}, {"cat": "TSH", "points": 2}, {"cat": "CBC", "points": 1}]},
        {"text": "Offer napkins but stay out", "scores": [{"cat": "BSR", "points": 3}, {"cat": "MM", "points": 2}, {"cat": "CBC", "points": 1}]}
    ],
    3: [
        {"text": "Laugh nervously", "scores": [{"cat": "TSH", "points": 3}, {"cat": "3JT", "points": 2}, {"cat": "CBC", "points": 1}]},
        {"text": "Act confused", "scores": [{"cat": "CBC", "points": 3}, {"cat": "OC", "points": 2}, {"cat": "MM", "points": 1}]},
        {"text": "Love this place!", "scores": [{"cat": "SMM", "points": 3}, {"cat": "HH", "points": 2}, {"cat": "MMP", "points": 1}]},
        {"text": "Haha, anyway...", "scores": [{"cat": "BSR", "points": 3}, {"cat": "PMK", "points": 2}, {"cat": "3JT", "points": 1}]}
    ],
    4: [
        {"text": "Usual", "scores": [{"cat": "PMK", "points": 3}, {"cat": "CBC", "points": 2}, {"cat": "TSH", "points": 1}]},
        {"text": "Try new", "scores": [{"cat": "MMP", "points": 3}, {"cat": "3JT", "points": 2}, {"cat": "OC", "points": 1}]},
        {"text": "your fave?", "scores": [{"cat": "HH", "points": 3}, {"cat": "BSR", "points": 2}, {"cat": "SMM", "points": 1}]},
        {"text": "suprise me", "scores": [{"cat": "3JT", "points": 3}, {"cat": "MM", "points": 2}, {"cat": "BSR", "points": 1}]}
    ],
    5: [
        {"text": "Small", "scores": [{"cat": "MM", "points": 3}, {"cat": "BSR", "points": 2}, {"cat": "CBC", "points": 1}]},
        {"text": "Regular", "scores": [{"cat": "HH", "points": 3}, {"cat": "TSH", "points": 2}, {"cat": "OC", "points": 1}]},
        {"text": "LARGE", "scores": [{"cat": "3JT", "points": 3}, {"cat": "SMM", "points": 2}, {"cat": "PMK", "points": 1}]},
        {"text": "EXTRA LARGE", "scores": [{"cat": "MMP", "points": 3}, {"cat": "SMM", "points": 2}, {"cat": "BSR", "points": 1}]}
    ],
    6: [
        {"text": "NO ICE", "scores": [{"cat": "OC", "points": 3}, {"cat": "3JT", "points": 2}, {"cat": "MM", "points": 1}]},
        {"text": "LITTLE ICE", "scores": [{"cat": "CBC", "points": 3}, {"cat": "MM", "points": 2}, {"cat": "TSH", "points": 1}]},
        {"text": "REGULAR", "scores": [{"cat": "PMK", "points": 3}, {"cat": "HH", "points": 2}, {"cat": "TSH", "points": 1}]},
        {"text": "MORE ICE", "scores": [{"cat": "MMP", "points": 3}, {"cat": "OC", "points": 2}, {"cat": "BSR", "points": 1}]}
    ],
    7: [
        {"text": "No SUGAR", "scores": [{"cat": "OC", "points": 3}, {"cat": "CBC", "points": 2}, {"cat": "TSH", "points": 1}]},
        {"text": "30 SUGAR", "scores": [{"cat": "BSR", "points": 3}, {"cat": "TSH", "points": 2}, {"cat": "CBC", "points": 1}]},
        {"text": "50 SUGAR", "scores": [{"cat": "MM", "points": 3}, {"cat": "PMK", "points": 2}, {"cat": "3JT", "points": 1}]},
        {"text": "70 SUGAR", "scores": [{"cat": "HH", "points": 3}, {"cat": "SMM", "points": 2}, {"cat": "MMP", "points": 1}]},
        {"text": "100 SUGAR", "scores": [{"cat": "MMP", "points": 3}, {"cat": "OC", "points": 2}, {"cat": "SMM", "points": 1}]}    
    ],
    8: [
        {"text": "NOT MY DRINK", "scores": [{"cat": "MM", "points": 3}, {"cat": "TSH", "points": 2}, {"cat": "OC", "points": 1}]},
        {"text": "OMG CAT", "scores": [{"cat": "SMM", "points": 3}, {"cat": "MMP", "points": 2}, {"cat": "HH", "points": 1}]},
        {"text": "CONFUSED", "scores": [{"cat": "CBC", "points": 3}, {"cat": "PMK", "points": 2}, {"cat": "MM", "points": 1}]},
        {"text": "TRADE?", "scores": [{"cat": "OC", "points": 3}, {"cat": "3JT", "points": 2}, {"cat": "CBC", "points": 1}]}
    ]
}

simulate_quiz()


from collections import defaultdict

# Initialize winner counts
winner_counts = defaultdict(int)
tie_counts = defaultdict(int)

for path in paths:
    scores = path["scores"]
    max_score = max(scores.values())
    tied_cats = [cat for cat, score in scores.items() if score == max_score]
    
    tie_counts[len(tied_cats)] += 1  # Count occurrences of tie sizes

    if len(tied_cats) == 1:  # Sole winner case
        winner_counts[tied_cats[0]] += 1

# Print total number of paths
print(f"Total number of paths: {len(paths)}")

# Print sole winner counts
print("Sole winner counts:")
for cat, count in sorted(winner_counts.items(), key=lambda x: x[1], reverse=True):
    print(f"{cat}: {count}")

# Print tie occurrences (ignoring 1-cat ties)
for tie_count in sorted(tie_counts.keys(), reverse=True):
    if tie_count == 1:
        continue  # Skip cases where there is only one top cat
    
    print(f"{tie_count} cat ties: {tie_counts[tie_count]}")
