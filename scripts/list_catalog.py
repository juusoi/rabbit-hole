#!/usr/bin/env python3
"""
List top-level catalog entries with their immediate children.
"""

from pathlib import Path


CATALOG_ROOTS = ("snippets", "boilerplate", "prompts", "guides")


def list_catalog(root: Path) -> None:
    if not root.exists():
        return
    for category in CATALOG_ROOTS:
        category_path = root / category
        if not category_path.exists():
            continue
        print(f"[{category}]")
        for child in sorted(category_path.glob("*")):
            if child.is_dir():
                print(f"  dir : {child.relative_to(root)}")
            else:
                print(f"  file: {child.relative_to(root)}")
        print()


if __name__ == "__main__":
    list_catalog(Path(__file__).resolve().parent.parent)
