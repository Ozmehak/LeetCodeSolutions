class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        n = len(s)
        # Iterate over all possible substring lengths from 1 to half the length of s
        for i in range(1, n // 2 + 1):
            # Check if s is divisible by i
            if n % i == 0:
                # Create a pattern string by repeating the substring s[:i] n // i times
                pattern = s[:i] * (n // i)
                # Check if the pattern string is equal to s
                if s == pattern:
                    # If the pattern string is equal to s, we have found a substring that can be repeated to form s
                    return True
        # If we have checked all possible substring lengths and have not found a substring that can be repeated to form s, return False
        return False
